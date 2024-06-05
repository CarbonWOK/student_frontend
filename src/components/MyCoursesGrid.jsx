import { SimpleGrid } from "@mantine/core";
import MyCourseCard from "./MyCourseCard";

function CoursePreviews(props) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 3 }}>
      {props.data.map((course) => (
        <MyCourseCard key={course.id} course={course} />
      ))}
    </SimpleGrid>
  );
}

export default CoursePreviews;
