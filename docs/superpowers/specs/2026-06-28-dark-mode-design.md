# Modo Escuro Grafite Suave

## Objetivo

Adicionar um modo escuro completo ao portfolio sem alterar sua identidade editorial, estrutura, textos, imagens ou navegacao. O tema deve funcionar em desktop e celular, ser acessivel e evitar qualquer clarão branco durante o carregamento.

## Direcao visual aprovada

O modo escuro usara a direcao **Grafite suave** escolhida pelo usuario:

- Fundo principal: `#161719`
- Superficies elevadas: `#202225`
- Superficies secundarias: `#292b2f`
- Bordas: `#3a3d42`
- Texto principal: `#f4f4f2`
- Texto secundario: `#afb1b5`
- Texto discreto: `#777b82`
- Acao primaria no modo escuro: fundo `#f4f4f2` e texto `#161719`

O tema continuara monocromatico. Nao serao adicionados gradientes coloridos, azul dominante ou efeitos neon.

## Comportamento

1. No primeiro acesso, o tema segue `prefers-color-scheme` do dispositivo.
2. O visitante pode alternar o tema por um botao Sol/Lua no cabecalho.
3. A escolha manual fica persistida em `localStorage`.
4. Depois de uma escolha manual, mudancas do sistema nao substituem a preferencia salva.
5. O tema e aplicado antes da hidratacao do React para evitar flash de tema incorreto.
6. O elemento `html` recebe a classe `dark` e `color-scheme` correspondente.

## Arquitetura

### ThemeProvider

Um provider cliente sera responsavel por:

- Ler e atualizar o tema ativo.
- Persistir a escolha manual.
- Expor `theme` e `toggleTheme` aos controles.
- Observar mudancas do sistema somente quando nao houver preferencia salva.

### Script de inicializacao

O layout raiz tera um script pequeno executado antes da hidratacao. Ele le a preferencia persistida ou consulta o sistema, aplica a classe `dark` em `document.documentElement` e define `color-scheme`. O elemento `html` usara `suppressHydrationWarning` porque a classe e aplicada no navegador antes do React.

### Estilos

O Tailwind v4 recebera uma variante escura baseada na classe `.dark`. Os componentes continuarao usando suas classes atuais no modo claro e receberao variantes `dark:` para o tema grafite.

## Cobertura visual

### Cabecalho

- Novo botao de tema com icones `Sun` e `Moon` do Lucide.
- Controle visivel no desktop e no celular.
- Navegacao flutuante em superficie grafite no tema escuro.
- Item ativo continua sendo destacado por preenchimento contrastante.

### Hero

- Fundo grafite e tipografia clara.
- Botoes invertem corretamente o contraste.
- Linhas, badge, indicadores e links sociais usam tons secundarios.
- A ilustracao troca para uma versao equivalente com camisa branca no modo escuro.

### Ilustracoes anime

- O personagem do hero e o personagem da secao `About` terao arquivos especificos para o modo escuro.
- As versoes escuras preservam rosto, tom de pele, cabelo curto, oculos, barba, pose, monitor, teclado e enquadramento das imagens atuais.
- A unica alteracao de roupa sera a camisa branca ou branco suave, garantindo contraste com o fundo grafite.
- Os novos arquivos usarao fundo transparente ou grafite integrado, sem retangulo branco ao redor da arte.
- Os assets serao exportados em formato otimizado para evitar carregar imagens grandes ou as duas variantes simultaneamente no hero.
- A troca de imagem acompanha a preferencia ativa, inclusive quando o visitante muda o tema manualmente.

### Secoes claras

`Skills`, `About`, `Services`, `Contact` e `Footer` recebem fundos, bordas, textos, campos e estados de hover grafite. Cartoes continuam legiveis e preservam a hierarquia existente.

### Secoes ja escuras

`Experience`, `Projects` e os cards de projeto permanecem escuros. Apenas seus tons de fundo e borda serao harmonizados para evitar uma quebra visual com o restante da pagina.

### Jogos e modais

O conteudo interno dos jogos mantem sua propria direcao visual. Somente a moldura e os controles externos do modal acompanham o tema do portfolio.

## Acessibilidade

- O botao informa sua acao por `aria-label` e `title` traduzidos em portugues e ingles.
- O foco por teclado deve permanecer visivel.
- Texto normal tera contraste minimo de 4.5:1.
- Elementos grandes e controles terao contraste minimo de 3:1.
- Animacoes e transicoes respeitarao `prefers-reduced-motion`.

## Responsividade

- Desktop: controle de tema junto ao seletor de idioma e ao curriculo.
- Celular: controle compacto ao lado do menu, sempre acessivel sem abrir o painel.
- Nenhum controle pode sobrepor o logo, menu ou conteudo do hero em 320 px de largura.

## Validacao

1. Confirmar tema inicial com sistema claro e escuro.
2. Alternar para escuro e recarregar, confirmando persistencia.
3. Alternar para claro e recarregar, confirmando persistencia.
4. Verificar hero, habilidades, experiencia, sobre, projetos, servicos, contato e rodape.
5. Confirmar que as duas ilustracoes usam camisa branca somente no modo escuro e camisa preta no modo claro.
6. Confirmar que apenas a variante visual ativa e carregada no hero.
7. Verificar formulario, cards, hovers, foco por teclado e menu mobile.
8. Validar desktop e celular, sem overflow, flash branco ou erro de hidratacao.
9. Executar TypeScript, ESLint e build de producao.

## Fora do escopo

- Alterar a identidade visual do modo claro.
- Alterar pose, rosto, cenario ou enquadramento das ilustracoes alem da troca de camisa exigida pelo modo escuro.
- Criar uma terceira paleta ou seletor de cores.
- Mudar textos, projetos, ordem das secoes ou funcionalidades dos jogos.
