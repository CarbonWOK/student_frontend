import MyCourceGrid from "../components/MyCoursesGrid";
import { coursesData } from "../helpers/data";

function MyCoursesPage() {
  return (
    <div>
      <MyCourceGrid cols={5} data={coursesData} />
    </div>
  );
}

export default MyCoursesPage;
