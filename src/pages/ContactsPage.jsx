import { Grid, Container, Text, Title, Button, Paper, Divider } from "@mantine/core";

function ContactsPage() {
  return (
    <Container>
      <Paper mb={"xl"} shadow="xl" radius="xl" p="xl">
        <Title ta={"center"} order={1} mb={"md"}>
          О нашем сайте
        </Title>
        <Divider size="lg" mb={"xl"} />
        <Grid mb={"xl"}>
          <Grid.Col span={6}>
            <Text size="xl" variant="gradient" gradient={{ from: "violet", to: "teal", deg: 90 }}>
              Это не просто обучение - это опыт. Мы стремимся сделать процесс обучения увлекательным и вовлекающим. Наши
              интерактивные материалы, живые вебинары и задания помогут вам не только усвоить материал, но и применить
              его на практике.
            </Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text size="xl" variant="gradient" gradient={{ from: "grape", to: "cyan", deg: 90 }}>
              Мы - это современная платформа, где вы найдете широкий спектр курсов по различным тематикам: от
              программирования и креативных искусств до финансов и маркетинга. Наши экспертные преподаватели - практики
              в своих областях - разработали курсы, основанные на актуальных тенденциях и лучших практиках.
            </Text>
          </Grid.Col>
        </Grid>
      </Paper>

      <Paper shadow="xl" radius="xl" p="xl">
        <Title ta={"center"} order={1} mb={"md"}>
          Как нас найти в онлайне
        </Title>
        <Divider size="lg" mb={"lg"} />
        <Button variant="transparent" color="violet" size="xl">
          ВКонтакте
        </Button>
        <Button variant="transparent" color="indigo" size="xl">
          Телеграм
        </Button>
        <Button variant="transparent" color="cyan" size="xl">
          Твиттер
        </Button>
      </Paper>
    </Container>
  );
}

export default ContactsPage;
