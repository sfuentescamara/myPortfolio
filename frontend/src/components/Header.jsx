export default function Header({ name, title }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold">{name}</h1>
        <h2 className="text-xl text-gray-600">{title}</h2>
      </div>
    </div>
  );
}
