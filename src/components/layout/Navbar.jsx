import { AppShell, NavLink } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconHome2, IconCategoryPlus, IconBooks, IconInfoSquare } from "@tabler/icons-react";

function Navbar() {
  return (
    <AppShell.Navbar className="Navbar">
      <Link to="/">
        <NavLink
          href="#"
          label="Главная"
          description="Главная страница"
          leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        />
      </Link>
      <Link to="/courses">
        <NavLink
          href="#"
          label="Каталог"
          description="Выберите курс для начала обучения"
          leftSection={<IconCategoryPlus size="1rem" stroke={1.5} />}
        />
      </Link>
      <Link to="/my-courses">
        <NavLink
          href="#"
          label="Мои курсы"
          description="Курсы, на которые вы записаны"
          leftSection={<IconBooks size="1rem" stroke={1.5} />}
        />
      </Link>
      <Link to="/contacts">
        <NavLink
          href="#"
          label="Контакты"
          description="Контактная информация"
          leftSection={<IconInfoSquare size="1rem" stroke={1.5} />}
        />
      </Link>
    </AppShell.Navbar>
  );
}

export default Navbar;
