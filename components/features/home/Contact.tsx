import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Section } from "@/components/common/Section";
import Link from "next/link";

export function Contact() {
    return (
        <Section id="contact" className="space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get in Touch
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I'm Justine Mirafuentes, a BSIT graduate and aspiring full stack developer. 
                    I'm currently open to job opportunities, freelance projects, or collaborations. 
                    If you have any questions or would like to work with me, feel free to reach out!
                </p>

                <Button size="lg" asChild>
                    <Link href="mailto:justinemirafuentes00@gmail.com">
                        <Mail className="mr-1 h-4 w-4" />
                        Say Hello
                    </Link>
                </Button>
            </div>
        </Section>
    );
}