interface CardProps {
    src: string,
    alt?: string,
    title: string,
    description: string
}
export function Card({ src, alt, title, description }: CardProps) {
    return <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <img
            src={src}
            alt={alt}
            className="w-full h-64 object-cover"
        />
        <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
}