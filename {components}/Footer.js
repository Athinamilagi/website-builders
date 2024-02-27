import scss from "../styles/_footer.module.scss";

const Footer = () => {
  return (
    <div className={scss.footer}>
      <header className={scss.header_container}>
        <nav>
          <span className="span">CATEGORIES</span>
          <ul>
            <li>
              <a href="#">Web Builder</a>
            </li>
            <li>
              <a href="#">Hosting</a>
            </li>
            <li>
              <a href="#">Data Center</a>
            </li>
            <li>
              <a href="#">Robotic - Automation</a>
            </li>
          </ul>
        </nav>
        <section className={scss.contact_us}>
          <span className="span">CONTACT</span>
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms Of Service</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </section>
        <div className={scss.location}>
          <input
            list="options"
            name="query"
            id="search"
            defaultValue="United States"
          />
          <datalist id="options">
            <option value=" United States" />
            <option value="India" />
            <option value="China" />
          </datalist>
        </div>
      </header>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} TopBuilders Company. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
