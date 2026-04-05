import { Section } from "@/components/common/Section";

export function Experience() {
    const experiences = [
        {
            title: "Bachelor of Science in Information Technology",
            company: "Cordova Public College",
            period: "2024 - Present",
            description: "Currently studying Information Technology, focusing on programming, web development, and system design. Continuously building technical and problem-solving skills.",
        },
        {
            title: "Student Developer",
            company: "Personal Projects",
            period: "2025 - Present",
            description: "Developing academic and personal projects such as a Mini EcoMarket System (C#) and CRUD applications using PHP and XAMPP. Exploring Next.js and Tailwind CSS.",
        },
        {
            title: "Aspiring Web Developer",
            company: "Self-Learning",
            period: "2024 - Present",
            description: "Actively learning modern web technologies including React, Next.js, and Tailwind CSS. Practicing UI/UX design and building portfolio projects.",
        },
    ];

    return (
        <Section className="space-y-12">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-[700px]">
                    My journey as a student and aspiring developer.
                </p>
            </div>

            <div className="relative border-l border-border ml-3 md:ml-6 space-y-8">
                {experiences.map((experience, index) => (
                    <div key={index} className="ml-6 relative">
                        <span className="absolute -left-[1.85rem] top-1 h-3 w-3 rounded-full border border-primary bg-background ring-4 ring-background" />
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-semibold">{experience.title}</h3>
                            <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                                {experience.period}
                            </span>
                        </div>
                        <p className="text-primary font-medium mb-2">{experience.company}</p>
                        <p className="text-muted-foreground">{experience.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}