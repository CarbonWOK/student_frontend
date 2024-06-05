import { SimpleGrid } from "@mantine/core";
import CourseCard from "./CourseCard";

function CoursePreviews(props) {
  return (
    <SimpleGrid cols={{ base: 1, sm: props.cols || 3 }}>
      {props.data.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </SimpleGrid>
  );
}

export default CoursePreviews;
