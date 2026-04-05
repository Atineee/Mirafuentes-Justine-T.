import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

const contactLinks = [
  { href: "tel:09287593062", label: "Phone: 0928 759 3062" },
  { href: "mailto:justinemirafuentes00@gmail.com", label: "justinemirafuentes00@gmail.com" },
  { href: "https://github.com/Atineee", label: "GitHub" }, // ✅ updated
  { href: "https://linkedin.com/", label: "LinkedIn" }, // optional (you can replace later)
] as const;

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="space-y-2">
            <Link href="/" className="font-semibold text-foreground">
              Justine Mirafuentes
            </Link>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer | Cebu, Philippines
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-foreground">
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-foreground">
              Skills
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>PHP & Laravel</li>
              <li>C# (.NET)</li>
              <li>JavaScript / React</li>
              <li>MySQL Database</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-foreground">
              Contact
            </h3>
            <ul className="space-y-2">
              {contactLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Justine Mirafuentes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}