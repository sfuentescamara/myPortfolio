export default function ProfileImage({ src }) {
  return (
    <img
      src={src}
      alt="Profile"
      className="w-32 h-32 rounded-full object-cover"
    />
  );
}
