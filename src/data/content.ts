import { GalleryItem, Testimonial, FaqItem, RhythmInfo } from '../types';

import heroImageSrc from '../assets/images/regenerated_image_1788993439868.jpg';
import aboutPortraitSrc from '../assets/images/regenerated_image_1788993440717.jpg';
import aboutDiplomaSrc from '../assets/images/regenerated_image_1788993441746.jpg';
import gallery1Src from '../assets/images/regenerated_image_1788993442930.jpg';
import gallery2Src from '../assets/images/regenerated_image_1788993444026.jpg';
import gallery3Src from '../assets/images/regenerated_image_1788993444869.jpg';
import gallery4Src from '../assets/images/regenerated_image_1788993445790.jpg';

export const PERSONAL_INFO = {
  name: 'Acelino Martins',
  role: 'Personal Dancer & Dançarino Acompanhante',
  subtitle: 'Especialista em Dança Gaúcha de Fandango & Salão',
  phone: '(51) 99778-0697',
  phoneClean: '5551997780697',
  whatsappUrl: 'https://wa.me/5551997780697?text=Ol%C3%A1%20Acelino!%20Gostaria%20de%20consultar%20disponibilidade%20para%20acompanhamento%20em%20um%20evento.',
  region: 'Atendimento exclusivo em Porto Alegre e Região',
  badgeLocation: 'Porto Alegre & RS',
  yearsExperience: 'Mais de 15 anos',
};

// Default images using the user's regenerated authentic photography
export const DEFAULT_IMAGES = {
  hero: heroImageSrc,
  aboutPortrait: aboutPortraitSrc,
  aboutDiploma: aboutDiplomaSrc,
  cardPhoto: aboutPortraitSrc,
};

export const STATS = [
  { label: '100% Cavalheirismo', subtext: 'Postura, respeito e conduta distinta' },
  { label: 'Diplomado Fandango Gaúcho', subtext: 'Formação em CTG e Academias' },
  { label: 'Personal Condução Segura', subtext: 'Estabilidade em cada compasso' },
];

export const PAIN_POINTS = [
  {
    id: 'mesa',
    title: 'A música toca e você na mesa',
    icon: 'Armchair',
    description:
      'Quantas vezes o conjunto tocou aquela vanera envolvente ou um xote compassado e você teve que ficar apenas batendo o pé na cadeira? Com Acelino, você ocupa o centro do salão.',
    check: 'Presença constante na pista',
  },
  {
    id: 'passos',
    title: 'Insegurança com os passos',
    icon: 'HeartHandshake',
    description:
      'O medo de pisar no pé ou errar o tempo da dança desaparece. A condução precisa, calma e firme de Acelino transmite total estabilidade em cada movimento musical.',
    check: 'Condução suave e paciente',
  },
  {
    id: 'parceiro',
    title: 'Falta de parceiro dedicado',
    icon: 'Sparkles',
    description:
      'Esqueça a sensação incômoda de esperar convites que nunca chegam. Tenha um acompanhante exclusivo, focado no seu bem-estar, respeito e diversão ao longo de toda a celebração.',
    check: 'Companheirismo e discrição total',
  },
];

export const SERVICES = [
  {
    number: '01',
    title: 'Acompanhamento em Eventos',
    icon: 'PartyPopper',
    description:
      'Tenha um par elegante, cavalheiro e experiente para te acompanhar em bailes, festas e casamentos. Você nunca mais vai ficar esperando alguém te convidar para dançar.',
    badge: 'BAILES TRADICIONALISTAS & GALAS SOCIAIS',
  },
  {
    number: '02',
    title: 'Dança Gaúcha e Outros Estilos',
    icon: 'Music',
    description:
      'Domine o salão com a tradição da dança gaúcha ou explore novos ritmos, com uma condução firme e segura que faz você dançar bem logo nos primeiros passos.',
    badge: 'VANERA, XOTE, MILONGA, VALSA E BOLERO',
  },
  {
    number: '03',
    title: 'Autoestima e Saúde',
    icon: 'Heart',
    description:
      'Sinta a energia, melhore sua postura e resgate a alegria de dançar a noite inteira, sem preocupações ou timidez. Uma vivência revigorante para corpo e mente.',
    badge: 'CONFIANÇA, POSTURA & BEM-ESTAR',
  },
];

export const ABOUT_PILLARS = [
  {
    title: 'Condutor Paciente e Atencioso',
    description: 'Ritmo adaptado ao seu tempo de aprendizado e conforto no salão.',
  },
  {
    title: 'Certificado em Dança Gaúcha e de Fandango',
    description: 'Formação tradicional sólida em CTGs e academias de renome do Rio Grande do Sul.',
  },
  {
    title: 'Respeito, Postura e Elegância Absoluta',
    description: 'Discrição refinada para você se sentir honrada e prestigiada no evento.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'ctg-bailes',
    category: 'Confraternização & Salão',
    title: 'Momentos em CTG e Bailes Sociais',
    imageUrl: gallery1Src,
    altText: 'Confraternização em CTG e Dança Tradicionalista Gaúcha',
    location: 'Porto Alegre - RS',
    description: 'Bailes sociais e noites festivas nos tradicionais galpões de CTG.',
  },
  {
    id: 'academia-fandango',
    category: 'Formação Oficial',
    title: 'Academia de Dança Fandango',
    imageUrl: gallery2Src,
    altText: 'Graduação e formação em Fandango Gaúcho',
    location: 'Rio Grande do Sul',
    description: 'Aprimoramento técnico contínuo e diplomas de fandango e danças gaúchas.',
  },
  {
    id: 'bailes-gala',
    category: 'Parceria & Elegância',
    title: 'Condução em Bailes de Gala',
    imageUrl: gallery3Src,
    altText: 'Casal dançando com elegância em baile de gala',
    location: 'Canoas / Grande Porto Alegre',
    description: 'Acompanhamento distinto em eventos solenes e noites comemorativas.',
  },
  {
    id: 'formatura-titulacao',
    category: 'Reconhecimento Técnico',
    title: 'Bailes de Formatura e Titulações',
    imageUrl: gallery4Src,
    altText: 'Celebração com diplomas e certificações tradicionalistas',
    location: 'Porto Alegre - RS',
    description: 'Celebrações de conclusão com instrutores e mestres de dança do estado.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      'Fazia anos que eu não ia a um baile do CTG porque tinha vergonha de ir sozinha e ficar sentada. Contratar o Acelino foi a melhor decisão. Ele é super educado, conduz com muita suavidade e me fez sentir a mais elegante da festa!',
    author: 'Maria Helena S.',
    context: 'Baile Tradicionalista',
    location: 'Porto Alegre',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'Tinha receio de não acompanhar o ritmo do fandango, mas o Acelino transmite uma calma impressionante. Dancei xote, vanera e valsa sem errar nada. Recomendo para todas as amigas!',
    author: 'Clarice V.',
    context: 'Formatura Social',
    location: 'Canoas',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'A elegância e o cavalheirismo do Acelino são raros hoje em dia. Pontual, bem trajado e focado em fazer a noite ser alegre e respeitosa. Uma companhia impecável do início ao fim.',
    author: 'Beatriz R.',
    context: 'Noite de Dança de Salão',
    location: 'Novo Hamburgo',
    rating: 5,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Preciso saber dançar para contratar o acompanhamento?',
    answer:
      'De forma alguma! O objetivo do Personal Dancer é justamente guiar você com total segurança e técnica, fazendo com que você acompanhe o ritmo e dance bem mesmo sem nenhuma experiência prévia. Acelino ajusta os passos para o seu ritmo com naturalidade e muita paciência.',
  },
  {
    id: 'faq-2',
    question: 'Quais ritmos você dança?',
    answer:
      'A especialidade principal é a autêntica dança gaúcha (vanera, vanerão, xote, milonga, valsa e bugio), mas o acompanhamento abrange diversos estilos de salão tradicionais como bolero, forró e samba de gafieira, adaptando-se perfeitamente ao perfil do evento e à sua preferência musical.',
  },
  {
    id: 'faq-3',
    question: 'Como funciona a contratação para eventos?',
    answer:
      'Basta enviar uma mensagem no WhatsApp informando a data, o estilo da festa e o local (atendimento em Porto Alegre e região metropolitana). Combinamos os horários de chegada, permanência e todos os detalhes do acompanhamento para que sua noite seja impecável.',
  },
  {
    id: 'faq-4',
    question: 'Existe discrição e respeito absoluto?',
    answer:
      'Sim, total discrição, postura de cavalheiro e ética profissional irrestrita. O serviço é voltado exclusivamente para proporcionar diversão saudável, a arte da dança e companhia distinta no salão de festas.',
  },
  {
    id: 'faq-5',
    question: 'O serviço atende apenas bailes de CTG ou também eventos sociais?',
    answer:
      'Atende ambos! Desde bailes tradicionais em CTGs até jantares de gala, formaturas, casamentos, aniversários de 15 anos e encontros em casas de dança de salão.',
  },
];

export const RHYTHMS: RhythmInfo[] = [
  {
    id: 'vanera',
    name: 'Vanera & Vanerão',
    origin: 'Tradição Gaúcha',
    tempo: '2/4 Rápido e Alegre',
    character: 'O ritmo mais vibrante dos bailes gaúchos, com passos cadenciados e energia contagiante.',
    description: 'Condução com postura ereta, giros harmoniosos e marcação precisa nos acordes da gaita.',
  },
  {
    id: 'xote',
    name: 'Xote Gaúcho',
    origin: 'Salões do Sul',
    tempo: '4/4 Suave e Marcado',
    character: 'Acolhedor e compassado, ideal para quem aprecia deslizar pela pista com serenidade.',
    description: 'Dois passos para lá, dois para cá com variações sutis e perfeito para conversar e relaxar.',
  },
  {
    id: 'valsa',
    name: 'Valsa Gaúcha',
    origin: 'Corte Tradicional',
    tempo: '3/4 Nobre e Contínuo',
    character: 'A rainha dos salões. Traz a solenidade e o romantismo dos grandes bailes de gala.',
    description: 'Giros amplos, postura impecável e sensação de flutuar na pista sob iluminação suave.',
  },
  {
    id: 'milonga',
    name: 'Milonga',
    origin: 'Pampa Rio-Grandense & Platino',
    tempo: '2/4 Expressivo e Cadenciado',
    character: 'Ritmo intimista, denso e marcado, carregado de história, respeito e conexão musical.',
    description: 'Passos curtos, pausas cheias de expressão e total sincronismo entre condutor e conduzida.',
  },
  {
    id: 'bolero',
    name: 'Bolero de Salão',
    origin: 'Salão Clássico',
    tempo: '4/4 Lento e Romântico',
    character: 'Clássico internacional presente nas melhores orquestras e bailes românticos.',
    description: 'Movimentos circulares, elegância contida e conforto absoluto para qualquer momento da noite.',
  },
];
