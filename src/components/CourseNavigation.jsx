import { NavLink, Paper } from "@mantine/core";
import { IconFingerprint } from "@tabler/icons-react";
import { navigationCourse } from "../helpers/data";

function CourseNavigation(props) {
  const { opened } = props;
  const getTree = (data) => {
    if (!data) return null;
    return data.map((elem) => {
      return (
        <NavLink
          defaultOpened={opened}
          onClick={() => {
            const targetElem = elem;
            if (targetElem.taskId) {
              props.setState?.(targetElem.taskId);
            }
          }}
          leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
          label={elem.name}
        >
          {getTree(elem.data)}
        </NavLink>
      );
    });
  };

  return (
    <Paper shadow="xl" radius="xl" withBorder p="xl">
      {getTree(navigationCourse[0].data)}
    </Paper>
  );
}

export default CourseNavigation;
