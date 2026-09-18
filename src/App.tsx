import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Table from "./components/ui/Table";
import "./style.css";

const App = () => {
  const handleAdd = () => {
    alert("Add Student clicked");
  };

  const handleRemove = () => {
    alert("Remove Student clicked");
  };

  const students = [
    {
      Name: "Ahmed",
      Age: 21,
      City: "Gaza",
    },
    {
      Name: "Sara",
      Age: 22,
      City: "Rafah",
    },
    {
      Name: "Omar",
      Age: 20,
      City: "Khan Yunis",
    },
  ];

  return (
    <div className="app-container">
      <header className="dashboard-header">
        <div className="header-info">
          <h1>Student Dashboard</h1>
          <p className="subtitle">Manage courses and registered students easily</p>
        </div>
        <div className="action-buttons">
          <Button
            text="Add Student"
            onClick={handleAdd}
            variant="primary"
          />
          <Button
            text="Remove Student"
            onClick={handleRemove}
            variant="danger"
          />
        </div>
      </header>

      <section className="section">
        <h2 className="section-title">Available Courses</h2>
        <div className="courses-grid">
          <Card
            title="React Course"
            description="Learn React and build high-performance, interactive modern web applications from scratch."
            image="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1280px-React_Logo_SVG.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
          >
            <Button
              text="Start Course"
              onClick={() => alert("React Course started!")}
              variant="primary"
            />
          </Card>
          <Card
            title="TypeScript Course"
            description="Master TypeScript types, interfaces, generics, and best practices for scalable applications."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfl3ZCalQUjEQV3-NwfIuPSHCx8XeLpLS_-i6IGnj8VSebahwgJ5W_L9I&s=10"
          >
            <Button
              text="Start Course"
              onClick={() => alert("TypeScript Course started!")}
              variant="primary"
            />
          </Card>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Enrolled Students</h2>
        <Table columns={["Name", "Age", "City"]} data={students} striped={true} />
      </section>
    </div>
  );
};

export default App;
