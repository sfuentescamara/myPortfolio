import usePortfolioData from "./hooks/usePortfolioData";
import Header from "./components/Header";
import ProfileImage from "./components/ProfileImage";
import ContactInfo from "./components/ContactInfo";
import Description from "./components/Description";
import Container from "./components/Container";

export default function App() {
  const data = usePortfolioData();

  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-8 font-sans">
      <div className="flex justify-between items-start">
        <div>
          <Header name={data.name} title={data.title} />
          <Description text={data.description} />
        </div>
        <div className="text-right ml-8">
          <ProfileImage src={data.photo} />
          <ContactInfo contact={data.contact} />
        </div>
      </div>
      <Container />
    </div>
  );
}
