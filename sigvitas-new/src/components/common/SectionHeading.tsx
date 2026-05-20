interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ 
  badge, 
  title, 
  subtitle, 
  center = true 
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-5 py-2 rounded-full text-sm font-medium mb-4">
          {badge}
        </div>
      )}
      
      <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-dark">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}