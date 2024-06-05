import { useDisclosure } from "@mantine/hooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  MantineProvider,
  AppShell,
  Burger,
  Group,
  Button,
  Modal,
  Input,
  Text,
  Space,
  Breadcrumbs,
  Anchor,
} from "@mantine/core";
import Navbar from "./components/layout/Navbar";
import MainPage from "./pages/MainPage";
import ContactsPage from "./pages/ContactsPage";
import CoursesPage from "./pages/CoursesPage";
import CoursePage from "./pages/CoursePage";
import MyCoursesPage from "./pages/MyCoursesPage";
import LearnPage from "./pages/LearnPage";
import "./App.css";
import "@mantine/core/styles.css";
import { useState } from "react";

function App() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);

  const [openedLogin, modalLogin] = useDisclosure(false);
  const [openedReg, modalReg] = useDisclosure(false);

  const [isLReq, setIsLReq] = useState(false);

  return (
    <MantineProvider>
      <BrowserRouter>
        <AppShell
          header={{ height: 50 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
          }}
          padding="md"
        >
          <AppShell.Header>
            <Group h="100%" px="md">
              <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
              <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
              <Text fw={600}>Онлайн learn</Text>
              <Button onClick={modalLogin.open} variant="light" color="cyan" style={{ marginLeft: "auto" }}>
                Войти
              </Button>
              <Button onClick={modalReg.open} variant="light">
                Регистрация
              </Button>
              <Modal opened={openedLogin} onClose={modalLogin.close} title="Вход в учетную запись">
                {!isLReq && (
                  <>
                    <Input variant="filled" size="md" radius="xs" placeholder="example@example.ru" />
                    <Space h="xl" />
                    <Input type="password" variant="filled" size="md" radius="xs" placeholder="Пароль" />
                    <Space h="xs" />
                    <Anchor onClick={() => setIsLReq(true)}>Забыли пароль?</Anchor>
                    <Space h="xs" />
                    <Button fullWidth variant="light" color="cyan">
                      Войти
                    </Button>
                  </>
                )}
                {isLReq && (
                  <>
                    <Anchor onClick={() => setIsLReq(false)}>{`<- Назад`}</Anchor> <Space h="xs" />
                    <Input variant="filled" size="md" radius="xs" placeholder="Ваш email для восстановления пароля" />
                    <Space h="xl" />
                    <Button fullWidth variant="light" color="cyan">
                      Получить код
                    </Button>
                  </>
                )}
              </Modal>
              <Modal opened={openedReg} onClose={modalReg.close} title="Регистрация нового аккаунта">
                <Input variant="filled" size="md" radius="xs" placeholder="Иван иванов" />
                <Space h="xl" />
                <Input variant="filled" size="md" radius="xs" placeholder="example@example.ru" />
                <Space h="xl" />
                <Input type="password" variant="filled" size="md" radius="xs" placeholder="Пароль" />
                <Space h="xl" />
                <Button fullWidth variant="light">
                  Регистрация
                </Button>
              </Modal>
            </Group>
          </AppShell.Header>
          <Navbar />
          <AppShell.Main>
            <Routes>
              <Route path="/" Component={MainPage} />
              <Route path="/courses" Component={CoursesPage} />
              <Route path="/course/:id" Component={CoursePage} />
              <Route path="/contacts" Component={ContactsPage} />
              <Route path="/my-courses" Component={MyCoursesPage} />
              <Route path="/learn/:id" Component={LearnPage} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
