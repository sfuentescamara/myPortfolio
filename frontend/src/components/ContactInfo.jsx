import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const ICONS = {
  email: <Mail className="inline mr-2" />,
  phone: <Phone className="inline mr-2" />,
  github: <Github className="inline mr-2" />,
  linkedin: <Linkedin className="inline mr-2" />,
  location: <MapPin className="inline mr-2" />
};

export default function ContactInfo({ contact }) {
  return (
    <div className="mt-4 space-y-2">
      {Object.entries(contact).map(([key, value]) => (
        <div key={key}>
          {ICONS[key]}{' '}
          {value.startsWith('http') ? (
            <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              {value}
            </a>
          ) : (
            <span>{value}</span>
          )}
        </div>
      ))}
    </div>
  );
}
