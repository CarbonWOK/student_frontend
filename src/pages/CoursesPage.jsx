import { useState } from "react";
import { Chip, Flex } from "@mantine/core";
import CoursePreviews from "../components/CoursePreviews";
import { coursesData } from "../helpers/data";
import { topicsCourses } from "../helpers/constants";

function CoursesPage() {
  const [filter, setFilter] = useState([]);

  const handleFilter = (tag) => {
    if (filter.includes(tag)) {
      setFilter((prev) => prev.filter((value) => value !== tag));
    } else {
      setFilter((prev) => [...prev, tag]);
    }
  };

  return (
    <div>
      <Flex wrap={"wrap"} mb={"md"}>
        {topicsCourses.map((tag) => (
          <Chip key={tag} m={3} onClick={() => handleFilter(tag)} checked={filter.includes(tag)}>
            {tag}
          </Chip>
        ))}
      </Flex>

      <CoursePreviews
        cols={5}
        data={coursesData.filter((course) => {
          if (!filter.length) return true;
          if (!course.topics) return false;
          const crossing = course.topics.filter((value) => filter.includes(value));
          return crossing.length > 0;
        })}
      />
    </div>
  );
}

export default CoursesPage;
