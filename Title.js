const template = document.createElement('template');
template.innerHTML = `
<style>
  .container {
    font-family: sans-serif;
    color: #800080;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
  }

</style>
<section class="container">
  <h1></h1>
</section>
`;

class Title extends HTMLElement{
 constructor(){
     super();
     this.attachShadow({ mode: 'open'});
     this.shadowRoot.appendChild(template.content.cloneNode(true));
     this.shadowRoot.querySelector('h1').innerText = this.getAttribute('name');

 } 

 connectedCallback(){
   this.h1 = this.getAttribute("name")
   this.render();
 }

 render(){
   this.h1;
 }
}

window.customElements.define('app-title', Title);