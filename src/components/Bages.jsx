import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";


function Bages(props) {
  const { course } = props;

  return (
    <Group mt="md">
      {course.duration && <Badge color="cyan">{course.duration}</Badge>}
      {true && <Badge color="teal">От 24К ₽</Badge>}
      {course.sale && <Badge color="pink">-5%</Badge>}
    </Group>
  );
}

export default Bages;
