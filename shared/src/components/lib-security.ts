import { customElement, property, query } from "lit/decorators.js";
import {
  css,
  type CSSResult,
  html,
  LitElement,
  type TemplateResult,
} from "lit";

import type { Auth } from "@kennycallado/test/services";

export interface Needs {
  auth: boolean;
  admin: boolean;
}

/**
 * Security component.
 * @module
 */
@customElement("lib-security")
export class LibSecurity extends LitElement {
  static override styles: CSSResult = css`
    :host {
      display: block;
      position: relative;
    }

    .wrap {
      position: absolute;
      top: 0;

      width: 100%;
      height: 100%;

      padding: 1rem;

      background-color: rgba(51, 51, 51, 0.1);
      backdrop-filter: blur(7px);
    }
  `;

  @query(".wrap")
  accessor wrap!: HTMLElement;

  @property({ type: Object })
  accessor needs: Needs = { auth: true, admin: true };

  @property({ type: Object })
  accessor auth: Auth | undefined;

  override firstUpdated() {
    if (this.auth) {
      this.auth.isReady.then(() => {
        setTimeout(() => {
          this.wrap.remove();
        }, 1000);
      });
    }
  }

  override render(): TemplateResult {
    return html`
      <slot name="content"></slot>
      <div class="wrap"></div>
    `;
  }
}
