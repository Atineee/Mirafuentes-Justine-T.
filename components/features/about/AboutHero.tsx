import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutHero() {
    return (
        <Section className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center lg:items-start justify-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gradient">
                        About Me
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Hi, I'm <strong>Justine Mirafuentes</strong>, a BSIT graduate based in Cebu. 
                        I am passionate about building efficient, scalable, and user-friendly applications. 
                        I have experience working with technologies like <strong>PHP, C#, JavaScript</strong>, 
                        and I enjoy creating systems such as POS applications and web-based solutions.
                        <br /><br />
                        I’m currently growing my skills in full-stack development and aiming to build impactful 
                        digital products that solve real-world problems.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <Button size="lg" className="group" asChild>
                        <Link href="/resume.pdf" download>
                            <Download className="mr-2 h-4 w-4" />
                            Download Resume
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="mailto:justinemirafuentes00@gmail.com">
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Me
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <Image
                    src="/justinee.jpg" // your image in public folder
                    alt="Justine Mirafuentes"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-2xl object-cover w-full max-w-[500px] aspect-square transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
            </div>
        </Section>
    );
}