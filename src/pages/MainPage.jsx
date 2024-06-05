import { Space, Container, Paper, rem, ThemeIcon, Text, List, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconCircleCheck } from "@tabler/icons-react";
import CoursePreviews from "../components/CoursePreviews";
import TeachersPreviews from "../components/TeachersPreviews";
import { coursesData } from "../helpers/data";
import "@mantine/carousel/styles.css";

import { highlightStyles } from "../helpers/styles";

function MainPage() {
  return (
    <>
      <Container>
        <Paper withBorder shadow="xl" radius="xl" p="xl">
          <Title order={1}>Добро пожаловать в наш онлайн учебный центр!</Title>
          <Space h="xl" />
          <Text size="xl">
            Хотите развиваться профессионально, но не хватает времени на посещение занятий в оффлайн формате? Мы
            предлагаем вам решение - наши онлайн курсы, разработанные экспертами в различных областях.
          </Text>
          <Space h="xl" />
          <Text size="xl">Присоединяйтесь к нам сегодня и начните свой путь к новым знаниям и возможностям!</Text>
        </Paper>
        <Space h="xl" />
        <Paper withBorder shadow="xl" radius="xl" p="xl">
          <CoursePreviews data={coursesData.slice(0, 3)} />
        </Paper>
        <Space h="xl" />
        <Paper withBorder shadow="xl" radius="xl" p="xl">
          <Title order={1}>Почему выбирают нас?</Title>
          <List
            spacing="xl"
            size="xl"
            icon={
              <ThemeIcon color="teal" size={24} radius="xl">
                <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            <List.Item>
              Гибкость: Учитеся в удобное для вас время и место. Наша платформа доступна 24/7, позволяя вам гибко
              планировать свое обучение в соответствии с вашим графиком.
            </List.Item>
            <List.Item>
              Качество: Наши курсы разработаны профессионалами в каждой области. Мы предлагаем только актуальные знания
              и практические навыки, которые помогут вам достичь успеха в вашей области.
            </List.Item>
            <List.Item>
              Интерактивность: Мы верим в значимость взаимодействия и практического опыта. Наши курсы включают в себя
              интерактивные задания, кейс-стади и обратную связь от опытных преподавателей.
            </List.Item>
            <List.Item>
              Разнообразие: Независимо от вашей цели обучения, у нас есть курсы для всех уровней и интересов. От языков
              и программирования до маркетинга и личностного роста - выбирайте то, что подходит именно вам.
            </List.Item>
            <List.Item>
              Поддержка: Наша команда всегда готова помочь вам. Если у вас есть вопросы или затруднения, наши эксперты
              будут рады помочь вам на каждом этапе обучения.
            </List.Item>
          </List>
        </Paper>
        <Space h="xl" />
        <TeachersPreviews />
      </Container>
    </>
  );
}

export default MainPage;
