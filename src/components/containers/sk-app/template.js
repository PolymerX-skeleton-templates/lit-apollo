import {html} from '@polymer/lit-element';

export default self => html`
<section class="Welcome">
  <img class="SKLogo" draggable="false" src="assets/AnimatedSkeleton.svg" alt="">
  <h1 class="Title">Web Components — Now (with Apollo 🚀).</h1>
  <p>
    This demo is loading data from Fakerql through an ApolloClient-LitElement implementation.
  </p>

  <sk-button on-click="${self.startTour}">Take a tour</sk-button>
</section>

${
  self.updateReady ?
    html`<sk-button on-click="reload" class="UpdateReadyAlert">Update ready, reload!</sk-button>` : ''
}

<div class="ApolloList">
  <h3>Data from <a href="https://fakerql.com/">Fakerql</a></h3>
  <ul>
${
  self.data.allProducts.map(prod =>
    html`<li><div>${prod.price}</div><div>${prod.id}</div></li>`
  )
}
  </ul>
</div>


<aside class="Meta">
  v${self.appVersion} - ENV: ${self.ENV}
</aside>
`;
