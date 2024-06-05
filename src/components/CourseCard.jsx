import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import Bages from "./Bages";

const src = "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png";

function CourseCard(props) {
  const { course } = props;
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <Card shadow="xl" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={course.image || src} height={160} alt="Img" />
      </Card.Section>

      <Bages course={course} />

      <Group justify="space-between" mt="xs" mb="xs">
        <Text fw={500}>{course.title}</Text>
      </Group>

      <Text size="sm" mb="md" c="dimmed">
        {course.description}
      </Text>
      <Button onClick={onButtonClick} color="blue" fullWidth mt="auto" radius="md">
        Подробнее
      </Button>
    </Card>
  );
}

export default CourseCard;
