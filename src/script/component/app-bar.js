class AppBar extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-image:url("https://seomuda.id/wp-content/uploads/2020/10/png-images-for-website-background-picture-406390-png-images-for-website-background-png-1024_640-570x320.png");
          }
          :host {
            display: block;
            width: 100%;
            background-color: #F5EBE0;
            color: #DBA39A;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          }
          h2 {
            padding: 40px;
            text-align:center;
            font-size:150px;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: black;
          }
        </style>
        
        <h2>Foodies</h2>
      `;
	}
}

customElements.define('app-bar', AppBar);
