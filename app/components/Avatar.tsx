// components/Avatar.tsx
import Image from "next/image";

const Avatar: React.FC = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/avatar.png" // Ensure the image is located in the public folder
        width={737}
        height={678}
        alt="Avatar Image"
        className="translate-z-0 w-full h-full"
        priority // Optional: Use priority for loading above-the-fold images
      />
    </div>
  );
};

export default Avatar;
