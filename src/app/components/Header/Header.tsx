export default function Header({ title }: { title: string }) {
    return (
        <h1 className="text-3xl font-bold mb-0 text-white/90">
            {title}
        </h1>
    )
}