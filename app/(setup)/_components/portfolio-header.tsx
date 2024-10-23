import Link from "next/link"

const PortfolioHeader = () => {
    return (
        <header className="p-6 shadow-md">
            <nav className="flex flex-1 items-center justify-between">
                <Link href="/" className="font-bold text-xl">Víctor Cândido</Link>
                <div className="flex items-center space-x-4">
                    <Link href="#about" className="text-sm font-medium hover:underline">Sobre</Link>
                    <Link href="#skills" className="text-sm font-medium hover:underline">Habilidades</Link>
                    <Link href="#projects" className="text-sm font-medium hover:underline">Projetos</Link>
                    <Link href="#experience" className="text-sm font-medium hover:underline">Experiência</Link>
                    <Link href="#contact" className="text-sm font-medium hover:underline">Contato</Link>
                </div>
            </nav>
        </header>
    );
}

export default PortfolioHeader;