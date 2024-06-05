import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Center, Grid, RingProgress, Progress } from "@mantine/core";

const src = "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png";

function CourseCard(props) {
  const { course } = props;
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/learn/${course.id}`);
  };

  return (
    <Card onClick={onCardClick} className="my-course-card" shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section mb={"md"}>
        <Image src={course.image || src} height={140} alt="Img" />
      </Card.Section>
      <Grid>
        <Grid.Col span={6}>
          <Text fw={500}>{course.title}</Text>
          <Text size="sm" mb="md" c="dimmed">
            {course.description}
          </Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Center>
            <RingProgress
              size={105}
              label={
                <Text size="xs" ta="center" fw={600}>
                  Теория
                </Text>
              }
              sections={[{ value: 70, color: "green" }]}
            />
            <RingProgress
              size={105}
              label={
                <Text size="xs" ta="center" fw={600}>
                  Практика
                </Text>
              }
              sections={[{ value: 40, color: "cyan" }]}
            />
          </Center>
          <Progress mt={"auto"} radius="xl" value={60} animated />
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default CourseCard;
