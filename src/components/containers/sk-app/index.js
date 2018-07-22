
import {html} from '@polymer/lit-element';
import {ApolloQuery} from 'lit-apollo';
import gql from 'graphql-tag';

import {apolloClient} from '../../../apollo';
import css from './style.pcss';
import template from './template';
import '../../dumbs/sk-button';

export default class SkApp extends ApolloQuery {
  static get properties() {
    return {
      name: String,
      appVersion: String,
      ENV: String,
      updateReady: Boolean,
      data: Object
    };
  }

  constructor() {
    super();
    this.appVersion = process.env.appVersion;
    this.ENV = process.env.NODE_ENV;
    this.updateReady = false;

    document.addEventListener('updateReady', () => {
      this.updateReady = true;
    });

    this.client = apolloClient;
    this.query = gql`
    {
      allProducts {
        id
        price
      }
    }`;
  }

  _render() {
    return html`<style>${css}</style> ${template(this)}`;
  }

  startTour() {
    window.location.replace('https://github.com/PolymerX/polymer-skeleton');
  }

  reload() {
    window.location.reload();
  }
}

window.customElements.define('sk-app', SkApp);
