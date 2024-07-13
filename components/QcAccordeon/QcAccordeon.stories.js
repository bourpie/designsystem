import { QcAccordeon } from './QcAccordeon.js';

export default {
    title: "Composants/QcAccordeon",
    component: QcAccordeon,
    tags: ['autodocs'],
    render: ({  }) => {
        return `
        <qc-accordeon>
          <button class="accordion-toggle">
          Section 1 <span class="icon lnr lnr-chevron-down"></span> 
          </button>
          <ul class="accordion-content">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
      </qc-accordeon>
    `;
      },
    };

    export const Primary = {

    };