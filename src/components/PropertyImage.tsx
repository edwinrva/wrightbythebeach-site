import Image from "next/image";

export function PropertyImage({
  src,
  alt,
  className = "",
  priority = false,
  absolute = false,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** Set when the caller wants the image to absolutely fill its parent (e.g. a hero background) instead of sizing itself via className. */
  absolute?: boolean;
  /** CSS object-position, for off-center subjects that need to stay in frame across aspect ratios. */
  objectPosition?: string;
}) {
  return (
    <div className={`overflow-hidden ${absolute ? "absolute inset-0" : "relative"} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        style={{ objectPosition }}
        priority={priority}
      />
    </div>
  );
}
