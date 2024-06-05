import { SimpleGrid, Container, Highlight } from "@mantine/core";
import TeacherInfo from "./TeacherInfo";
import { coursesData } from "../helpers/data";
import { highlightStyles } from "../helpers/styles";

function TeachersPreviews() {
  return (
    <Container>
      <Highlight mb="xs" size="xl" highlight="Наши преподаватели" highlightStyles={highlightStyles}>
        Наши преподаватели
      </Highlight>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        {coursesData.slice(0, 2).map((course) => (
          <TeacherInfo key={course.instructor.name} info={course.instructor} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default TeachersPreviews;
