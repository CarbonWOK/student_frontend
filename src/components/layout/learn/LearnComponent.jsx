import {
  Card,
  Title,
  Text,
  Textarea,
  Space,
  AspectRatio,
  Code,
  List,
  Grid,
  Blockquote,
  Flex,
  FileInput,
} from "@mantine/core";
import { tasksData } from "../../../helpers/data";

function LearnComponent(props) {
  const task = tasksData.find((task) => task.id === props.taskId);

  if (!task) return null;

  return (
    <div style={{ "padding-right": "20px" }}>
      <Title order={2} color="gray">
        {task.name}
      </Title>
      <Space h="xl" />

      {task.text && (
        <>
          <Blockquote color="gray">{task.text}</Blockquote>
          <Space h="xl" />
        </>
      )}

      {task.list && (
        <>
          <List spacing="md" size="lg">
            {task.list.map((text) => (
              <List.Item>{text}</List.Item>
            ))}
          </List>
          <Space h="xl" />
        </>
      )}

      {task.code && (
        <>
          <Code block>{task.code}</Code>
          <Space h="xl" />
        </>
      )}

      {task.video && (
        <>
          <AspectRatio ratio={21 / 9} mih={400}>
            <iframe
              src={task.video}
              title="YouTube video player"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
          <Space h="xl" />
        </>
      )}

      {task.image && (
        <>
          <AspectRatio ratio={21 / 9}>
            <img src={task.image} alt="Panda" />
          </AspectRatio>
          <Space h="xl" />
        </>
      )}

      {task.codeanswer && (
        <>
          <Textarea
            minRows={6}
            resize="vertical"
            label="Введите ваше решение и нажмите отправить"
            placeholder="Ваш ответ"
          />
          <Space h="xl" />
        </>
      )}

      {task.fileanswer && (
        <>
          <FileInput
            label="Загрузите вашу работу для проверки"
            description="После отправки преподаватели курса проверят вашу работу и вы получите оценку"
            placeholder="Выберите файл"
          />
          <Space h="xl" />
        </>
      )}

      <Grid>
        <Grid.Col span={2}></Grid.Col>
        <Grid.Col span={4}>
          <Card className="learn-component-button" withBorder radius="md">
            <Flex justify={"space-between"} align={"center"}>
              <div>{"<"}</div>
              <div style={{ textAlign: "end" }}>
                <Text fw={600}>Отправить</Text>
                <Text>Отправить решение на проверку</Text>
              </div>
            </Flex>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card onClick={props.nextState} className="learn-component-button" withBorder radius="md">
            <Flex justify={"space-between"} align={"center"}>
              <div>
                <Text fw={600}>Далее</Text>
                <Text>Перейти к следующему шагу курса</Text>
              </div>
              <div>{">"}</div>
            </Flex>
          </Card>
        </Grid.Col>
        <Grid.Col span={2}></Grid.Col>
      </Grid>
    </div>
  );
}

export default LearnComponent;
