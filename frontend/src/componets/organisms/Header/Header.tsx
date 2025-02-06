import { getHeader } from "@/utils/query/getHeader";
import "./header.scss";

const Header = async () => {
  const { data, error } = await getHeader();
  const logo = data?.header?.logo;

  console.log("logoText", logo?.company);
  return (
    <header className="header">
      <div className="container header__container">
        {" "}
        <div className="header__logo">
          {/* Логотип (можно изображение или текст) */}
          <a href="/" className="header__logo-link">
            {" "}
            {/* Делаем логотип ссылкой на главную */}
            <img
              src="/path/to/your/logo.svg"
              alt="Logo"
              className="header__logo-image"
            />{" "}
            {/* Пример с изображением */}
            {/* Или просто текст: */}
            {/* <span className="header__logo-text">My Website</span> */}
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="/about" className="header__nav-link">
                О нас
              </a>
            </li>
            <li className="header__nav-item">
              <a href="/services" className="header__nav-link">
                Услуги
              </a>
            </li>
            <li className="header__nav-item">
              <a href="/contact" className="header__nav-link">
                Контакты
              </a>
            </li>
            {/* Другие пункты меню */}
          </ul>
        </nav>
        <div className="header__auth">
          <a href="/login" className="header__auth-link header__auth-login">
            Войти
          </a>
          <a
            href="/register"
            className="header__auth-link header__auth-register"
          >
            Зарегистрироваться
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
