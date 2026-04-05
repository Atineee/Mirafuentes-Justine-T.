"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Section } from "@/components/common/Section";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";
import { Send } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters." }),
	email: z.string().email({ message: "Invalid email address." }),
	subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
	message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must be at most 500 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	const onSubmit = async (data: FormData) => {
		console.log("Form submitted:", data);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		toast.success("Message sent successfully!");
		form.reset();
	};

	return (
		<Section className="min-h-screen">
			<div className="grid lg:grid-cols-2 lg:gap-24 gap-12 items-center">
				
				{/* LEFT SIDE */}
				<div className="space-y-6">
					<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
						Let’s Work Together
					</h1>
					<p className="text-muted-foreground md:text-xl/relaxed">
						Hi, I'm <strong>Justine Mirafuentes</strong>, a BSIT graduate and aspiring Full Stack Developer. 
						If you have a project, job opportunity, or collaboration in mind, feel free to reach out. 
						I’m always open to building impactful and meaningful systems.
					</p>

					<div className="space-y-4 pt-4">
						<div className="flex items-center gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
								<Send className="h-5 w-5" />
							</div>
							<div>
								<p className="font-medium">Email</p>
								<p className="text-muted-foreground">
									justinemirafuentes00@gmail.com
								</p>
							</div>
						</div>

						{/* OPTIONAL: Location */}
						<div>
							<p className="font-medium">Location</p>
							<p className="text-muted-foreground">Cebu, Philippines</p>
						</div>
					</div>
				</div>

				{/* RIGHT SIDE FORM */}
				<Card className="w-full">
					<CardHeader>
						<CardTitle>Contact Me</CardTitle>
						<CardDescription>
							Send me a message and I’ll get back to you as soon as possible.
						</CardDescription>
					</CardHeader>

					<CardContent>
						<form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
							<FieldGroup>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<Controller
										name="name"
										control={form.control}
										render={({ field, fieldState }) => (
											<Field data-invalid={fieldState.invalid}>
												<FieldLabel htmlFor="name">Name</FieldLabel>
												<Input {...field} id="name" placeholder="Your Name" />
												{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
											</Field>
										)}
									/>

									<Controller
										name="email"
										control={form.control}
										render={({ field, fieldState }) => (
											<Field data-invalid={fieldState.invalid}>
												<FieldLabel htmlFor="email">Email</FieldLabel>
												<Input {...field} id="email" type="email" placeholder="your@email.com" />
												{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
											</Field>
										)}
									/>
								</div>

								<Controller
									name="subject"
									control={form.control}
									render={({ field, fieldState }) => (
										<Field data-invalid={fieldState.invalid}>
											<FieldLabel htmlFor="subject">Subject</FieldLabel>
											<Input {...field} id="subject" placeholder="Job Opportunity / Project Collaboration" />
											{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
										</Field>
									)}
								/>

								<Controller
									name="message"
									control={form.control}
									render={({ field, fieldState }) => (
										<Field data-invalid={fieldState.invalid}>
											<FieldLabel htmlFor="message">Message</FieldLabel>
											<InputGroup>
												<InputGroupTextarea
													{...field}
													id="message"
													placeholder="Tell me about your project or opportunity..."
													rows={6}
													className="min-h-24 resize-none"
												/>
												<InputGroupAddon align="block-end">
													<InputGroupText>
														{field.value.length}/500
													</InputGroupText>
												</InputGroupAddon>
											</InputGroup>
											{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
										</Field>
									)}
								/>
							</FieldGroup>
						</form>
					</CardContent>

					<CardFooter>
						<Button
							type="submit"
							form="contact-form"
							className="w-full"
							size="lg"
							disabled={form.formState.isSubmitting}
						>
							{form.formState.isSubmitting ? "Sending..." : "Send Message"}
						</Button>
					</CardFooter>
				</Card>
			</div>
		</Section>
	);
}