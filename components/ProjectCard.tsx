import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image }) => {
  return (
    <div className="bg-black rounded-lg shadow-lg overflow-hidden">
      <Image src={image} alt={title} width={500} height={300} className="w-full object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-gray-400 text-sm">{category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
