class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-dark navbar-expand-lg">
            <a class="navbar-brand" href="index.html">دليل الفعاليات</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dd-menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="dd-menu">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">تواصل معنا</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">من نحن</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="events.html">الفعاليات</a>
                    </li>
                </ul>
            </div>
        </nav>
        `;
    }
}

customElements.define('navbar-component', Navbar);