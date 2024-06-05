import { useParams } from "react-router-dom";
import {
  Text,
  Accordion,
  SegmentedControl,
  Button,
  Image,
  Blockquote,
  Grid,
  Dialog,
  Space,
  Highlight,
  Fieldset,
  TextInput,
  Timeline,
  Table,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import { IconInfoCircle, IconVideo, IconSun } from "@tabler/icons-react";
import { coursesData } from "../helpers/data";
import TeacherInfo from "../components/TeacherInfo";
import CourseNavigation from "../components/CourseNavigation";
import { highlightStyles } from "../helpers/styles";
import Bages from "../components/Bages";

const src = "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png";

function CoursePage() {
  const { id } = useParams();
  const course = coursesData.find((course) => course.id === id);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Grid>
      <Grid.Col span={{ base: 12, sm: 8 }}>
        <Image height={400} src={course.image || src} />
        <Space h="xl" />
        <Accordion variant="contained" radius="xs" defaultValue="Apples">
          {[
            {
              emoji: "✔",
              value: "Тариф Lite",
              description:
                "Тариф Lite предназначен для тех, кто хочет освоить основы программирования в удобном темпе и по доступной цене. В этом тарифе вы получите доступ к базовым урокам и материалам курса. Тариф Lite идеально подходит для начинающих, которые только начинают свой путь в мир программирования и хотят познакомиться с основными концепциями и навыками.",
            },
            {
              emoji: "☑",
              value: "Тариф Medium",
              description:
                "Тариф Medium предоставляет более широкие возможности для обучения и развития. Помимо базовых уроков, в этом тарифе вы получите доступ к дополнительным материалам, упражнениям и проектам, которые помогут вам закрепить полученные знания на практике. Тариф Medium подходит как для начинающих, так и для тех, кто уже имеет некоторый опыт в программировании и хочет расширить свои знания.",
            },
            {
              emoji: "✅",
              value: "Тариф MAX",
              description:
                "Тариф Max - это полный набор возможностей для обучения программированию. В этом тарифе вы получите доступ ко всем урокам, материалам, упражнениям и проектам курса, а также к индивидуальной поддержке и консультациям от опытных преподавателей. Тариф Max подходит для серьезных студентов, которые стремятся к максимальному результату и готовы погрузиться в изучение программирования на полную глубину.",
            },
          ].map((item) => (
            <Accordion.Item key={item.value} value={item.value} p={5}>
              <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
              <Accordion.Panel>{item.description}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
        <Blockquote color="violet" radius="xs" iconSize={60} cite="" icon={<IconInfoCircle />} mt="xl">
          <Text size="xl">{course.longDescription}</Text>
        </Blockquote>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 4 }}>
        <Highlight mb="xs" size="xl" highlight={course.title} highlightStyles={highlightStyles}>
          {course.title}
        </Highlight>
        <Bages course={course} />
        <Space h="xl" />
        <TeacherInfo info={course.instructor} />
        <Space h="xl" />
        <CourseNavigation opened={true} />
        <Space h="xl" />
        <Table striped highlightOnHover withRowBorders={false} horizontalSpacing="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                <Text size="lg" fw={600}>
                  Тариф
                </Text>
              </Table.Th>
              <Text size="lg" fw={600}>
                Стоимость
              </Text>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[
              { position: "Lite", mass: 24000 },
              { position: "Medium", mass: 28000 },
              { position: "MAX", mass: 35000 },
            ].map((element) => (
              <Table.Tr key={element.name}>
                <Table.Td>{element.position}</Table.Td>
                <Table.Td>{element.mass} ₽</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <Dialog opened={true} size="lg" radius="xl">
          <Button onClick={open} fullWidth size="compact-xl" radius={"xl"}>
            Начать обучение
          </Button>
          <Drawer opened={opened} onClose={close} title="Записаться на курс" position="right">
            <Timeline mt={"lg"} bulletSize={24}>
              <Timeline.Item title="Отправьте заявку">
                <Text c="dimmed" size="sm">
                  Выберите тариф и отправьте заявку, указав данные
                </Text>
              </Timeline.Item>
              <Timeline.Item title="Ожидайте">
                <Text c="dimmed" size="sm">
                  С вами свяжутся организаторы для оплаты и откроют курс
                </Text>
              </Timeline.Item>
              <Timeline.Item title="Получите доступ">
                <Text c="dimmed" size="sm">
                  Курс откроется и станет отображаться в ваших курсах
                </Text>
              </Timeline.Item>
              <Timeline.Item title="Прохождение">
                <Text c="dimmed" size="sm">
                  Заходите и учитесь, когда вам удобно
                </Text>
              </Timeline.Item>
            </Timeline>
            <Space h="xl" />
            <Fieldset legend="Персональная информация" radius="xs">
              <TextInput label="Ваше имя" placeholder="Иван Иванов" />
              <TextInput label="Почта" placeholder="mail@mail.ru" my="md" />
              <SegmentedControl fullWidth size="md" radius="xl" data={["Lite", "Medium", "Max"]} />
              <Button fullWidth mt={5}>
                Отправить заявку
              </Button>
            </Fieldset>
          </Drawer>
        </Dialog>
      </Grid.Col>
    </Grid>
  );
}

export default CoursePage;
