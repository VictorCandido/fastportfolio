import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PortfolioHeader from "./portfolio-header"

const Portfolio = () => {
    return (
        <div>
            <PortfolioHeader />

            <main className="mx-20">
                <section id="about" className="py-12 md:py-24">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Víctor Cândido</h1>
                            <h2 className="text-2xl font-semibold text-muted-foreground">Senior Full Stack Engineer</h2>
                            <p className="max-w-[600px] text-muted-foreground">
                                Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes.
                                Com experiência em desenvolvimento web e mobile, estou sempre em busca de novos desafios
                                e oportunidades para aprender e crescer na área de tecnologia.
                            </p>
                            <div className="flex space-x-4">
                                <Button asChild>
                                    <Link href="#contact">Entre em contato</Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href="/cv.pdf" target="_blank">
                                        <FileText className="mr-2 h-4 w-4" />
                                        Ver CV
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <Image
                            src="https://avatars.githubusercontent.com/u/48322249?v=4"
                            alt="João Silva"
                            width={300}
                            height={300}
                            className="rounded-full"
                        />
                    </div>
                </section>

                <section id="skills" className="py-12">
                    <h2 className="text-3xl font-bold mb-6">Habilidades</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {["JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL", "Git", "Docker"].map((skill) => (
                            <Card key={skill}>
                                <CardContent className="flex items-center justify-center h-24">
                                    <span className="font-semibold">{skill}</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="projects" className="py-12">
                    <h2 className="text-3xl font-bold mb-6">Projetos</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "E-commerce Platform",
                                description: "Uma plataforma de comércio eletrônico completa com carrinho de compras e sistema de pagamento.",
                                tech: "React, Node.js, MongoDB"
                            },
                            {
                                title: "Task Management App",
                                description: "Um aplicativo de gerenciamento de tarefas com recursos de colaboração em tempo real.",
                                tech: "React Native, Firebase"
                            }
                        ].map((project, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4">{project.description}</p>
                                    <p className="text-sm font-semibold">Tecnologias: {project.tech}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="experience" className="py-12">
                    <h2 className="text-3xl font-bold mb-6">Experiência</h2>
                    <div className="space-y-6">
                        {[
                            {
                                title: "Desenvolvedor Full Stack Senior",
                                company: "Tech Solutions Inc.",
                                period: "2020 - Presente",
                                description: "Liderança de equipe no desenvolvimento de aplicações web de grande escala."
                            },
                            {
                                title: "Desenvolvedor Front-end",
                                company: "WebDev Co.",
                                period: "2018 - 2020",
                                description: "Criação de interfaces responsivas e otimização de performance para aplicações web."
                            }
                        ].map((job, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold">{job.title}</h3>
                                    <p className="text-muted-foreground">{job.company} | {job.period}</p>
                                    <p className="mt-2">{job.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="contact" className="py-12">
                    <h2 className="text-3xl font-bold mb-6">Contato</h2>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Button asChild>
                            <Link href="mailto:joao.silva@email.com">
                                <Mail className="mr-2 h-4 w-4" />
                                joao.silva@email.com
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="https://github.com/joaosilva" target="_blank">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="https://linkedin.com/in/joaosilva" target="_blank">
                                <Linkedin className="mr-2 h-4 w-4" />
                                LinkedIn
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>

            <footer className="border-t">
                <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                    <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                        <p className="text-center text-sm leading-loose md:text-left">
                            © 2024 Víctor Cândido. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Portfolio;