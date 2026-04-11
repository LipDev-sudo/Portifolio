"""Generate resume PDF for Hamilton Felipe (LipDev) matching the template style."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas

OUTPUT = r"C:\Users\Felipe\OneDrive\Pictures\Hamilton_Felipe_LipDev_Resume.pdf"

PAGE_W, PAGE_H = A4
MARGIN_X = 18 * mm
MARGIN_TOP = 20 * mm

# Fonts — monospace for the "code tag" style of the template
MONO_BOLD = "Courier-Bold"
SANS = "Helvetica"
SANS_BOLD = "Helvetica-Bold"
SANS_IT = "Helvetica-Oblique"


def draw_line(c, x1, y, x2, thickness=0.6):
    c.setLineWidth(thickness)
    c.setStrokeColorRGB(0, 0, 0)
    c.line(x1, y, x2, y)


def draw_wrapped(c, text, x, y, max_width, font=SANS, size=9, leading=12):
    c.setFont(font, size)
    words = text.split()
    line = ""
    for w in words:
        test = (line + " " + w).strip()
        if c.stringWidth(test, font, size) <= max_width:
            line = test
        else:
            c.drawString(x, y, line)
            y -= leading
            line = w
    if line:
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_bullets(c, items, x, y, max_width, font=SANS, size=9, leading=12):
    for item in items:
        c.setFont(font, size)
        c.drawString(x, y, "•")
        y = draw_wrapped(c, item, x + 10, y, max_width - 10, font, size, leading)
        y -= 2
    return y


def section_header(c, text, x, y, width):
    c.setFont(SANS_BOLD, 11)
    c.drawString(x, y, text)
    y -= 4
    draw_line(c, x, y, x + width, 0.8)
    return y - 14


# =========================================================
# PAGE 1 — RESUME
# =========================================================
def build_page1(c):
    # === HEADER: Big monospace name in angle brackets ===
    c.setFillColorRGB(0, 0, 0)
    c.setFont(MONO_BOLD, 26)
    c.drawString(MARGIN_X, PAGE_H - MARGIN_TOP - 10, "<HAMILTON")
    c.drawString(MARGIN_X, PAGE_H - MARGIN_TOP - 40, "FELIPE>")

    # === Contact info (top right) ===
    contact_x = PAGE_W - MARGIN_X
    contact_y = PAGE_H - MARGIN_TOP - 4
    c.setFont(SANS, 8.5)
    contacts = [
        "Paulista, PE — Brasil",
        "+55 (81) 98284-5783",
        "hamiltonfelipe019@gmail.com",
        "lipdev-portfolio.vercel.app",
        "github.com/LipDev-sudo",
        "linkedin.com/in/hamilton-felipe-875054383",
        "@lip.devbr",
    ]
    for line in contacts:
        c.drawRightString(contact_x, contact_y, line)
        contact_y -= 10

    # === Summary ===
    summary_y = PAGE_H - MARGIN_TOP - 78
    summary = (
        "Desenvolvedor Full Stack com foco em React, Next.js, TypeScript e Node.js. "
        "Crio soluções práticas com código limpo e escalável, construindo landing pages, "
        "portfolios, catálogos digitais e lojas virtuais. Apaixonado por performance, "
        "design e por entregar experiências que as pessoas realmente queiram usar."
    )
    summary_y = draw_wrapped(
        c, summary, MARGIN_X, summary_y, PAGE_W - 2 * MARGIN_X, size=9.5, leading=12
    )

    # === Two-column layout ===
    col_gap = 10 * mm
    col_w = (PAGE_W - 2 * MARGIN_X - col_gap) / 2
    left_x = MARGIN_X
    right_x = MARGIN_X + col_w + col_gap

    y_left = summary_y - 14
    y_right = summary_y - 14

    # ----- LEFT COLUMN: PROFESSIONAL EXPERIENCE -----
    y_left = section_header(c, "PROFESSIONAL EXPERIENCE", left_x, y_left, col_w)

    experiences = [
        {
            "title": "Full Stack Developer — Freelancer",
            "company": "LipDev.BR",
            "period": "2024 - Present",
            "desc": (
                "Desenvolvimento de landing pages, portfolios, catálogos digitais "
                "e lojas virtuais para pequenos negócios. Stack principal: Next.js, "
                "React, TypeScript e Tailwind CSS. Integrações com EmailJS e WhatsApp."
            ),
        },
        {
            "title": "Frontend Developer — Projetos Pessoais",
            "company": "Portfolio LipDev.BR",
            "period": "2023 - Present",
            "desc": (
                "Construção de 7+ projetos publicados, incluindo e-commerces premium, "
                "plataformas de cursos online, sistemas de pedidos e catálogos. Foco em "
                "animações (Framer Motion), performance e UI moderna."
            ),
        },
        {
            "title": "Projetos em destaque",
            "company": "",
            "period": "",
            "desc": (
                "• Premium Custom E-commerce — layout estilo Apple Store com "
                "glassmorphism e parallax.\n"
                "• Loja Virtual Profissional — template estilo Amazon com mega "
                "search bar.\n"
                "• Catálogo de Produtos — integração WhatsApp + carrinho de compras.\n"
                "• Plataforma de Pedidos Online para restaurantes e pequenos comércios."
            ),
        },
    ]

    for exp in experiences:
        c.setFont(SANS_BOLD, 9.5)
        c.drawString(left_x, y_left, exp["title"])
        y_left -= 11
        if exp["company"]:
            c.setFont(SANS, 9)
            c.drawString(left_x, y_left, exp["company"])
            y_left -= 10
        if exp["period"]:
            c.setFont(SANS, 9)
            c.drawString(left_x, y_left, exp["period"])
            y_left -= 12
        else:
            y_left -= 2

        for para in exp["desc"].split("\n"):
            y_left = draw_wrapped(c, para, left_x, y_left, col_w, size=8.5, leading=10.5)
        y_left -= 8

    # ----- RIGHT COLUMN: EDUCATION / SKILLS / LANGUAGES -----
    y_right = section_header(c, "EDUCATION", right_x, y_right, col_w)

    c.setFont(SANS_BOLD, 9.5)
    c.drawString(right_x, y_right, "Análise e Desenvolvimento de Sistemas")
    y_right -= 11
    c.setFont(SANS, 9)
    c.drawString(right_x, y_right, "UNINASSAU")
    y_right -= 10
    c.drawString(right_x, y_right, "Último período — Conclusão prevista 2027")
    y_right -= 13
    y_right = draw_wrapped(
        c,
        "Formação superior em desenvolvimento de sistemas, com ênfase em "
        "engenharia de software, banco de dados, estruturas de dados, POO e "
        "desenvolvimento web moderno.",
        right_x,
        y_right,
        col_w,
        size=8.5,
        leading=10.5,
    )
    y_right -= 10

    # SKILLS
    y_right = section_header(c, "SKILLS & PROFICIENCIES", right_x, y_right, col_w)
    skills = [
        "Next.js, React, TypeScript, JavaScript",
        "Tailwind CSS, Framer Motion, HTML5, CSS3",
        "Node.js, REST APIs, Zod, React Hook Form",
        "Git, GitHub, Vercel, Figma, VS Code",
        "UI/UX, responsividade, performance web",
        "Clean code, código escalável, boas práticas",
    ]
    y_right = draw_bullets(c, skills, right_x, y_right, col_w, size=8.5, leading=10.5)
    y_right -= 8

    # LANGUAGES
    y_right = section_header(c, "LANGUAGES", right_x, y_right, col_w)
    languages = [
        "Português (Nativo)",
        "Inglês (Leitura e Escrita)",
    ]
    y_right = draw_bullets(c, languages, right_x, y_right, col_w, size=8.5, leading=10.5)
    y_right -= 8

    # LINKS
    y_right = section_header(c, "LINKS", right_x, y_right, col_w)
    links = [
        "Portfolio: lipdev-portfolio.vercel.app",
        "GitHub: github.com/LipDev-sudo",
        "LinkedIn: hamilton-felipe-875054383",
        "Instagram: @lip.devbr",
    ]
    draw_bullets(c, links, right_x, y_right, col_w, size=8.5, leading=10.5)

    # === FOOTER (big mono closing tag) ===
    c.setFont(MONO_BOLD, 20)
    c.drawString(MARGIN_X, 16 * mm, "</FULL STACK DEVELOPER>")


# =========================================================
# PAGE 2 — COVER LETTER
# =========================================================
def build_page2(c):
    # Left sidebar: big mono name
    c.setFillColorRGB(0, 0, 0)
    c.setFont(MONO_BOLD, 22)
    c.drawString(MARGIN_X, PAGE_H - MARGIN_TOP - 10, "<HAMILTON")
    c.drawString(MARGIN_X, PAGE_H - MARGIN_TOP - 36, "FELIPE>")

    # Vertical separator
    sep_x = MARGIN_X + 70 * mm
    c.setLineWidth(0.8)
    c.setStrokeColorRGB(0, 0, 0)
    c.line(
        sep_x,
        PAGE_H - MARGIN_TOP - 5,
        sep_x,
        40 * mm,
    )

    # Right side: letter content
    right_x = sep_x + 6 * mm
    right_w = PAGE_W - right_x - MARGIN_X
    y = PAGE_H - MARGIN_TOP - 5

    c.setFont(SANS, 9.5)
    c.drawString(right_x, y, "Paulista, PE — 2026")
    y -= 22

    c.setFont(SANS_BOLD, 9.5)
    c.drawString(right_x, y, "Prezado(a) Recrutador(a),")
    y -= 14

    c.setFont(SANS, 9.5)
    paragraphs = [
        "Meu nome é Hamilton Felipe, também conhecido como LipDev. Sou "
        "Desenvolvedor Full Stack, atualmente no último período de Análise e "
        "Desenvolvimento de Sistemas pela UNINASSAU, e venho através desta "
        "apresentar meu interesse em fazer parte do seu time.",
        "",
        "Trabalho com desenvolvimento web moderno há mais de dois anos, "
        "construindo soluções reais com Next.js, React, TypeScript, Tailwind CSS "
        "e Node.js. Meu foco é entregar código limpo, escalável e bem "
        "arquitetado, sempre equilibrando performance, design e experiência do "
        "usuário.",
        "",
        "Ao longo da minha jornada, desenvolvi mais de sete projetos publicados, "
        "entre landing pages, portfolios, catálogos digitais e lojas virtuais "
        "completas. Cada projeto é uma oportunidade de aplicar boas práticas e "
        "de aprender algo novo — e é exatamente essa mentalidade que pretendo "
        "levar para a sua equipe.",
        "",
        "Alguns pontos que trago para a mesa:",
    ]
    for p in paragraphs:
        if p == "":
            y -= 6
            continue
        y = draw_wrapped(c, p, right_x, y, right_w, size=9.5, leading=12)

    bullets = [
        "Experiência prática com o ecossistema React / Next.js em produção.",
        "Capacidade de transformar ideias em produtos digitais completos.",
        "Atenção a detalhes de UI, acessibilidade e performance.",
        "Perfil autodidata, colaborativo e com forte senso de propriedade.",
    ]
    y -= 2
    y = draw_bullets(c, bullets, right_x, y, right_w, size=9.5, leading=12)
    y -= 6

    closing = [
        "Ficarei muito feliz em conversar sobre como posso contribuir com os "
        "desafios do time. Meu portfolio completo, com todos os projetos e "
        "códigos, está disponível em lipdev-portfolio.vercel.app e também no "
        "meu GitHub.",
        "",
        "Agradeço pela atenção e pelo tempo dedicado à minha candidatura. "
        "Fico no aguardo de um retorno.",
    ]
    for p in closing:
        if p == "":
            y -= 6
            continue
        y = draw_wrapped(c, p, right_x, y, right_w, size=9.5, leading=12)

    y -= 12
    c.setFont(SANS, 9.5)
    c.drawString(right_x, y, "Atenciosamente,")
    y -= 20
    c.setFont(SANS_BOLD, 10)
    c.drawString(right_x, y, "Hamilton Felipe Soares da Silva")
    y -= 12
    c.setFont(SANS_IT, 9)
    c.drawString(right_x, y, "LipDev — Full Stack Developer")

    # Bottom-left contact block
    bl_y = 40 * mm
    c.setFont(SANS, 8.5)
    bl_lines = [
        "Paulista, PE — Brasil",
        "+55 (81) 98284-5783",
        "hamiltonfelipe019@gmail.com",
        "lipdev-portfolio.vercel.app",
    ]
    for line in bl_lines:
        c.drawString(MARGIN_X, bl_y, line)
        bl_y -= 11


def build_resume():
    c = canvas.Canvas(OUTPUT, pagesize=A4)
    c.setTitle("Hamilton Felipe - Full Stack Developer Resume")
    c.setAuthor("Hamilton Felipe Soares da Silva")
    build_page1(c)
    c.showPage()
    build_page2(c)
    c.showPage()
    c.save()
    print(f"OK: {OUTPUT}")


if __name__ == "__main__":
    build_resume()
