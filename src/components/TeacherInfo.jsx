import { Card, Text, Flex } from "@mantine/core";
import { Avatar } from "@mantine/core";

function TeacherInfo(props) {
  const { info } = props;
  return (
    <Card padding="lg" radius="md">
      <Card.Section>
        <Flex gap="xs" justify="flex-start" align="center" direction="row" wrap="nowrap">
          <Avatar src={info.avatar} size="xl" radius="xl" />
          <div>
            <Text fw={500}>{info.name}</Text>
            <Text size="sm" mb="md" c="dimmed">
              {info.qualification}
            </Text>
          </div>
        </Flex>
      </Card.Section>
    </Card>
  );
}

export default TeacherInfo;
