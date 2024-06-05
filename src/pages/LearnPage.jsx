import { useState } from "react";
import { Grid, Container, Paper } from "@mantine/core";
import CourseNavigation from "../components/CourseNavigation";
import LearnComponent from "../components/layout/learn/LearnComponent";

function LearnPage() {
  const [state, setState] = useState(1);

  return (
    <div>
      <Grid>
        <Grid.Col span={9}>
          <LearnComponent taskId={state} nextState={() => setState((value) => value + 1)} />
        </Grid.Col>
        <Grid.Col span={3}>
          <CourseNavigation setState={setState} />
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default LearnPage;
