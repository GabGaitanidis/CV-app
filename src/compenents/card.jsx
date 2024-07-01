import "../index.css";
import jsPDF from "jspdf";
export default function Card({ data }) {
  const downloadPDF = () => {
    const doc = new jsPDF("portrait", "px", "a4");
    const margin = 10;
    const element = document.querySelector(".card");
    doc.html(element, {
      x: margin,
      y: margin,
      html2canvas: { scale: 0.6 },
      callback: function (doc) {
        doc.save(`${data.firstName}.pdf`);
      },
    });
  };
  return (
    <div className="card">
      <h1>CV Card</h1>
      <label htmlFor="">
        Name: <input type="text" value={data.firstName} disabled />
      </label>
      <label htmlFor="">
        Last Name: <input type="text" value={data.lastName} disabled />
      </label>
      <label htmlFor="">
        Email: <input type="email" value={data.email} disabled />
      </label>
      <label htmlFor="">
        Address: <input type="text" value={data.address} disabled />
      </label>
      <label htmlFor="">
        School: <input type="text" value={data.school} disabled />
      </label>
      <label htmlFor="">
        Degree: <input type="text" value={data.degree} disabled />
      </label>
      <label htmlFor="">
        Graduation-Date: <input type="date" value={data.endDate} disabled />
      </label>
      <label htmlFor="">
        Location: <input type="text" value={data.location} disabled />
      </label>
      <label htmlFor="">
        Company-Name: <input type="text" value={data.compName} disabled />
      </label>
      <label htmlFor="">
        Position-Title: <input type="text" value={data.posTitle} disabled />
      </label>
      <label htmlFor="">
        Main-Responsibilities:{" "}
        <input type="text" value={data.mainRes} disabled />
      </label>
      <label htmlFor="">
        Experience: <input type="text" value={data.experience} disabled />
      </label>
      <h1>Skills</h1>
      <ul className="ul">
        {data.skillItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="dowload-section">
        <h5>@gaitanidiis</h5>
        <button onClick={downloadPDF}>Download</button>
      </div>
    </div>
  );
}
